package yan.tests.maneg.service;

import yan.tests.maneg.config.audit.AuditEventConverter;
import yan.tests.maneg.repository.PersistenceAuditEventRepository;
import org.springframework.boot.actuate.audit.AuditEvent;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Optional;

/**
 * Service for managing audit events.
 * <p>
 * This is the default implementation to support SpringBoot Actuator AuditEventRepository
 */
@Service
public class AuditEventService {

    private final PersistenceAuditEventRepository persistenceAuditEventRepository;

    private final AuditEventConverter auditEventConverter;

    public AuditEventService(
        PersistenceAuditEventRepository persistenceAuditEventRepository,
        AuditEventConverter auditEventConverter) {

        this.persistenceAuditEventRepository = persistenceAuditEventRepository;
        this.auditEventConverter = auditEventConverter;
    }

    public Page<AuditEvent> findAll(Pageable pageable) {
        return persistenceAuditEventRepository.findAll(pageable)
            .map(auditEventConverter::convertToAuditEvent);
    }

    public Page<AuditEvent> findByDates(Instant fromDate, Instant toDate, Pageable pageable) {
        return persistenceAuditEventRepository.findAllByAuditEventDateBetween(fromDate, toDate, pageable)
            .map(auditEventConverter::convertToAuditEvent);
    }

    public Optional<AuditEvent> find(String id) {
        return Optional.ofNullable(persistenceAuditEventRepository.findOne(id)).map
            (auditEventConverter::convertToAuditEvent);
    }
}
